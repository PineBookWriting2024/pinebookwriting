export const sections = [
  {
    "id": "book-details",
    "title": "Your book, at a glance",
    "shortTitle": "Book details",
    "description": "Every great book starts with a few details. Tell us about yours.",
    "fields": [
      {
        "name": "authorName",
        "label": "Author’s Full Name?",
        "required": true,
        "hint": "(If you're using a pen name, use it here, and please make sure your name should be the same as on the book cover and publishing.)"
      },
      {
        "name": "contactEmail",
        "label": "Your email address",
        "type": "email",
        "required": true,
        "hint": "So our team can follow up on your questionnaire."
      },
      {
        "name": "bookTitle",
        "label": "Book Title & Sub-title?",
        "required": true,
        "hint": "(A subtitle is an optional secondary title that contains additional information about the content of your book. It must be the same on the book cover)"
      },
      {
        "name": "subtitle",
        "label": "Book subtitle",
        "hint": "Optional secondary title with more information about your book."
      },
      {
        "name": "genre",
        "label": "Your Book's subject Matter or Genre (The \"Mood\" of Your Book).",
        "required": true,
        "placeholder": "e.g. Autobiography, religious, poetry, children’s fiction",
        "wide": true,
        "hint": "Autobiography, Religious, Poetry, and Children, etc."
      },
      {
        "name": "trimSize",
        "label": "What is the page size of your book (width x height)?",
        "type": "select",
        "required": true,
        "options": [
          "6 × 9 inches",
          "5 × 8 inches",
          "7 × 10 inches",
          "8.5 × 8.5 inches",
          "8.5 × 11 inches",
          "Custom size"
        ],
        "hint": "(We need to know the trim size you want for your book before starting the design process.) 6x9, 5x8, 7x10, 8.5x8.5, 8.5x11 etc."
      },
      {
        "name": "customTrimSize",
        "label": "Custom width × height (include units)",
        "required": true,
        "showWhen": [
          "trimSize",
          "Custom size"
        ]
      }
    ],
    "note": "Note: If you decide to change the size after the formatting and design process has begun, you may incur additional charges as we will need to redo the formatting and design to the new size."
  },
  {
    "id": "typography",
    "title": "Give your words a style",
    "shortTitle": "Typography",
    "description": "Formatting is how your manuscript looks and reads. Things like font size, page color, word count, page number, line spacing, paragraph breaks–everything that goes into the visual appearance.",
    "fields": [
      {
        "name": "titleFont",
        "label": "How would you like us to style the Book Title page?",
        "type": "select",
        "required": true,
        "options": [
          "Trajan Pro – 12pt",
          "Garamond – 14pt",
          "Gotham Black – 14pt",
          "Other"
        ],
        "hint": "(Please share your desired font style and size for the title page) The preferable font for the book title page"
      },
      {
        "name": "customTitleFont",
        "label": "Your title page font and size",
        "required": true,
        "showWhen": [
          "titleFont",
          "Other"
        ]
      },
      {
        "name": "chapterFont",
        "label": "How would you like us to style your Chapters?",
        "type": "select",
        "required": true,
        "options": [
          "Trajan Pro – 14pt",
          "Times New Roman – 14pt",
          "Other"
        ],
        "hint": "(What Font style and size should be used as the headings.) The preferable font for headings in the manuscript are."
      },
      {
        "name": "customChapterFont",
        "label": "Your chapter heading font and size",
        "required": true,
        "showWhen": [
          "chapterFont",
          "Other"
        ]
      },
      {
        "name": "bodyFont",
        "label": "What will be your preferred Font style and size for text?",
        "type": "select",
        "required": true,
        "options": [
          "Times New Roman – 12pt",
          "Arial – 12pt",
          "Georgia – 12pt",
          "Garamond – 12pt",
          "Malgun Gothic – 12pt",
          "Other"
        ],
        "hint": "Note: The most common print font Style and Size is: “Times New Roman and 12”. Other fonts that can be used for the text are below"
      },
      {
        "name": "customBodyFont",
        "label": "Your body text font and size",
        "required": true,
        "showWhen": [
          "bodyFont",
          "Other"
        ]
      },
      {
        "name": "textAlignment",
        "label": "What would be your preferred text alignment? left-aligned / right-aligned / justified?",
        "type": "select",
        "required": true,
        "options": [
          "Left-aligned",
          "Right-aligned",
          "Justified"
        ],
        "hint": "(Text alignment is a paragraph formatting attribute that determines the appearance of the text in a whole paragraph.)"
      },
      {
        "name": "coverReference",
        "label": "Selected cover reference",
        "type": "cover-reference",
        "options": ["Reference 01", "Reference 02"]
      },
      {
        "name": "titlePageNotes",
        "label": "Title page styling notes",
        "type": "textarea",
        "wide": true,
        "placeholder": "Tell us about a reference, lettering style, or any other title page preferences."
      }
    ]
  },
  {
    "id": "page-layout",
    "title": "The details between the covers",
    "shortTitle": "Page layout",
    "description": "Make your book easy to navigate, from its first page to its final word.",
    "fields": [
      {
        "name": "tableOfContents",
        "label": "Would you like to use the Table of Contents? Do you want your sub-headings to be added to the table of contents?",
        "type": "select",
        "required": true,
        "options": [
          "Yes",
          "No"
        ],
        "hint": "(The list of chapters and page numbers at the beginning of a book is the table of contents. Making it easier for readers to navigate your book.)",
        "wide": true
      },
      {
        "name": "tocSubheadings",
        "label": "Do you want your sub-headings to be added to the table of contents?",
        "type": "select",
        "required": true,
        "options": [
          "Yes",
          "No"
        ],
        "showWhen": [
          "tableOfContents",
          "Yes"
        ]
      },
      {
        "name": "pageNumbers",
        "label": "Would you like to place the page number? If yes, where should it appear, such as in the Footer / Header, and what would be the alignment, e.g., center/left/right?",
        "type": "select",
        "required": true,
        "options": [
          "Yes",
          "No"
        ],
        "wide": true
      },
      {
        "name": "pageNumberPosition",
        "label": "Page number placement",
        "type": "select",
        "required": true,
        "options": [
          "Footer",
          "Header"
        ],
        "showWhen": [
          "pageNumbers",
          "Yes"
        ]
      },
      {
        "name": "pageNumberAlignment",
        "label": "Page number alignment",
        "type": "select",
        "required": true,
        "options": [
          "Center",
          "Left",
          "Right"
        ],
        "showWhen": [
          "pageNumbers",
          "Yes"
        ]
      },
      {
        "name": "runningTitles",
        "label": "Would you like to use alternate or similar titles throughout the book?",
        "type": "select",
        "required": true,
        "wide": true,
        "options": [
          "Alternate titles",
          "Same book title on every page",
          "No running titles"
        ],
        "hint": "(In the alternate title option book title will appear on the left-hand page and the chapter name or subtitle on the right-hand page. While a similar title will have a Book title on every page)"
      },
      {
        "name": "headerContent",
        "label": "Would you like to use the author’s name or book title in the Header?",
        "type": "select",
        "required": true,
        "options": [
          "Author’s name",
          "Book title",
          "Author’s name and book title",
          "Chapter name",
          "No header",
          "Other"
        ],
        "hint": "(Headers are the standard text that appears on each page’s top. Sometimes publishers put the name of the book, the name of the author, or even the name of the chapter you're reading in the header. It's all about branding.)"
      },
      {
        "name": "customHeader",
        "label": "Describe your header",
        "required": true,
        "showWhen": [
          "headerContent",
          "Other"
        ]
      },
      {
        "name": "copyrightPage",
        "label": "If you have any Book Disclaimer / Copyrights page, please share it with us, or do you want us to use the default one?",
        "type": "select",
        "required": true,
        "options": [
          "Use the default page",
          "I will provide my own",
          "No disclaimer / copyright page"
        ],
        "hint": "(If yes, kindly share with us on basecamp or directly to your dedicated project manager.)",
        "wide": true
      },
      {
        "name": "indexGlossary",
        "label": "Would you like to use the Index or glossary page at the end of the book?",
        "type": "select",
        "required": true,
        "options": [
          "Index",
          "Glossary",
          "Both index and glossary",
          "Neither"
        ],
        "hint": "(An index is essentially a roadmap to the book, listing names, places, and things in alphabetical order and giving the page numbers associated with each topic. A glossary is a list of technical terms or abbreviations that may be unfamiliar to some readers; glossaries are included to help enhance the reader’s knowledge)"
      }
    ],
    "note": "Note: This service is only available on a client-request basis; you may incur additional charges."
  },
  {
    "id": "proofreading",
    "title": "A final polish, in your voice",
    "shortTitle": "Proofreading",
    "description": "Tell our editors how you would like your manuscript reviewed.",
    "fields": [
      {
        "name": "editingService",
        "label": "What kind of editing do you want for your manuscript?",
        "type": "select",
        "required": true,
        "options": [
          "Copy-editing",
          "Proofreading"
        ],
        "wide": true
      },
      {
        "name": "trackChanges",
        "label": "Would you like us to proofread/copy-edit your manuscript with Track Changes?",
        "type": "select",
        "required": true,
        "options": [
          "Yes",
          "No"
        ],
        "hint": "(We proofread Microsoft Word documents using the Track Changes function; therefore, our changes are visible. After each proofreading job, clients receive a track change copy of the document and a clean copy with all the incorporated changes.)"
      },
      {
        "name": "language",
        "label": "What is the preferred language that you want to use, US or UK?",
        "type": "select",
        "required": true,
        "options": [
          "US English",
          "UK English"
        ]
      },
      {
        "name": "specialInstructions",
        "label": "Are there any special instructions?",
        "type": "textarea",
        "wide": true,
        "placeholder": "The floor is yours. Tell us about photos, spacing, special formatting, or anything we haven’t covered.",
        "hint": "(The floor is yours! This is the space for anything not covered above.)"
      }
    ]
  }
];

export const isVisible = (field, values) => !field.showWhen || values[field.showWhen[0]] === field.showWhen[1];

export function validateQuestionnaire(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { error: 'Please submit a valid questionnaire.' };
  const values = {};
  for (const field of sections.flatMap(section => section.fields)) {
    if (!isVisible(field, body)) continue;
    const value = body[field.name];
    if (value !== undefined && typeof value !== 'string') return { error: `Please check ${field.label.toLowerCase()}.` };
    const answer = (value || '').trim();
    if (field.required && !answer) return { error: `Please complete ${field.label.toLowerCase()}.` };
    if (answer.length > (field.type === 'textarea' ? 5000 : 300)) return { error: `${field.label} is too long.` };
    if (answer && field.options && !field.options.includes(answer)) return { error: `Please choose a valid option for ${field.label.toLowerCase()}.` };
    values[field.name] = answer;
  }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(values.contactEmail) || /[\r\n]/.test(values.contactEmail)) return { error: 'Please enter a valid email address.' };
  return { values };
}
