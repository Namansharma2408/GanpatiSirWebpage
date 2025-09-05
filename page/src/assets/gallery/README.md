# Gallery Images

This folder contains images that are automatically displayed in the Gallery page.

## How to Add Images

1. Simply drop any image file (JPG, JPEG, PNG) into this folder
2. The gallery will automatically detect and display the new images
3. Images are categorized automatically based on filename keywords

## Automatic Categorization

Images are automatically categorized based on keywords in the filename:

- **Team**: Contains "team", "researcher", "pi", "dr"
- **Research**: Contains "research", "synthesis", "experiment"
- **Publications**: Contains "publication", "journal", "paper"
- **Facility**: Contains "facility", "lab", "equipment"
- **Instrumentation**: Contains "instrument", "spectrometer", "analyzer"
- **General**: Default category for other images

## File Naming

- Use descriptive filenames with hyphens or underscores
- Example: `dr-ganapathy-research-team.jpg` → Title: "Dr Ganapathy Research Team", Category: "Team"
- Example: `electro-organic-synthesis.jpg` → Title: "Electro Organic Synthesis", Category: "Research"

## Supported Formats

- JPG, JPEG
- PNG
- Both uppercase and lowercase extensions are supported

## Refresh

After adding images, you may need to restart the development server for the changes to be detected.
