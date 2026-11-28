#!/usr/bin/env python3
"""Homework web derlemesi: src/ + src/data/ + apps/ -> dist/www (tek index.html + gömülü oyunlar).
Kullanım: python3 tools/build.py"""
import pathlib, re, shutil
root = pathlib.Path(__file__).resolve().parent.parent
src, out = root / "src", root / "dist" / "www"
ver = (root / "VERSION").read_text().strip()
assert re.fullmatch(r"\d+\.\d+\.\d+", ver), "VERSION X.Y.Z olmalı"
r = lambda p: (src / p).read_text(encoding="utf-8")
safe = lambda js: js.replace("</script", "<\\/script")

if out.exists():
    shutil.rmtree(out)
out.mkdir(parents=True)
data = "\n".join(p.read_text(encoding="utf-8") for p in sorted((src / "data").glob("*.js")))
M = {"/*CSS*/": r("style.css"), "/*DATA*/": safe(data), "/*JS*/": safe(r("app.js"))}
html = re.sub("|".join(map(re.escape, M)), lambda m: M[m.group(0)], r("template.html")).replace("__VER__", ver)
(out / "index.html").write_text(html, encoding="utf-8", newline="")
(out / "sw.js").write_text(r("sw.js").replace("__VER__", ver), encoding="utf-8")
for f in ("hw-home.js", "manifest.webmanifest"):
    shutil.copy(src / f, out / f)
for f in (root / "icons").glob("icon-*.png"):
    shutil.copy(f, out / f.name)

# gömülü oyunlar: olduğu gibi kopyala, yalnızca ana sayfaya dönüş köprüsünü ekle
for app in sorted((root / "apps").iterdir()):
    dst = out / "apps" / app.name
    shutil.copytree(app, dst)
    p = dst / "index.html"
    h = p.read_text(encoding="utf-8")
    i = h.rfind("</body>")
    assert i > 0, app.name
    p.write_text(h[:i] + f'<script src="../../hw-home.js" data-app="{app.name}"></script>\n' + h[i:], encoding="utf-8", newline="")
size = sum(f.stat().st_size for f in out.rglob("*") if f.is_file())
print(f"Homework v{ver}: dist/www hazır ({size/1e6:.1f} MB, index.html {len(html)/1e3:.0f} KB)")
