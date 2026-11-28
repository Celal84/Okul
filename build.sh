#!/usr/bin/env bash
# Homework — web + imzalı APK derlemesi (Gradle'sız: aapt2 → javac → d8 → zipalign → apksigner).
# Kullanım: ANDROID_HOME=/yol/sdk KS=/yol/homework.jks KS_PASS=... bash build.sh [cikti.apk]
#   KS verilmezse yalnızca web (dist/www) derlenir. Anahtar alias'ı: homework.
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
ver="$(tr -d ' \r\n' < "$here/VERSION")"
python3 "$here/tools/build.py"
[ -n "${KS:-}" ] || { echo "KS yok: yalnızca web derlendi."; exit 0; }
IFS=. read -r a b c <<< "$ver"
code=$((a * 10000 + b * 100 + c))
sdk="${ANDROID_HOME:-${ANDROID_SDK_ROOT:-$HOME/Android/Sdk}}"
bt="$sdk/build-tools/35.0.0"; jar="$sdk/platforms/android-35/android.jar"
and="$here/android"; out="$here/dist/apk"; final="${1:-$here/dist/Homework_v$ver.apk}"
rm -rf "$out"; mkdir -p "$out/classes" "$out/dex" "$out/assets"
cp -r "$here/dist/www" "$out/assets/www"
rm -f "$out/assets/www/sw.js" "$out/assets/www/manifest.webmanifest"
sed -e "s/__VER__/$ver/" -e "s/__CODE__/$code/" "$and/AndroidManifest.xml" > "$out/AndroidManifest.xml"
"$bt/aapt2" compile --dir "$and/res" -o "$out/res.zip"
"$bt/aapt2" link -o "$out/base.apk" -I "$jar" --manifest "$out/AndroidManifest.xml" -A "$out/assets" \
  --min-sdk-version 24 --target-sdk-version 35 --auto-add-overlay -0 ogg -0 webp -0 woff2 "$out/res.zip"
javac --release 11 -encoding UTF-8 -nowarn -classpath "$jar" -d "$out/classes" $(find "$and/src" -name '*.java')
"$bt/d8" --release --min-api 24 --lib "$jar" --output "$out/dex" $(find "$out/classes" -name '*.class')
(cd "$out/dex" && zip -q -j "$out/base.apk" classes.dex)
"$bt/zipalign" -p -f 4 "$out/base.apk" "$out/aligned.apk"
"$bt/apksigner" sign --ks "$KS" --ks-key-alias homework --ks-pass "pass:$KS_PASS" --key-pass "pass:$KS_PASS" --out "$final" "$out/aligned.apk"
"$bt/apksigner" verify "$final"
echo "APK hazır: $final"
