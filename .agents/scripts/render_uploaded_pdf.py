from pathlib import Path
import sys

import fitz


source = Path(sys.argv[1])
output_dir = Path(sys.argv[2])
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(source)
print(f"Pages: {document.page_count}")
print(f"Title: {document.metadata.get('title') or '(not set)'}")

for index, page in enumerate(document, start=1):
    print(f"Page {index}: {page.rect.width:.0f} × {page.rect.height:.0f} pt")
    image = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
    image.save(output_dir / f"page-{index:02d}.png")
