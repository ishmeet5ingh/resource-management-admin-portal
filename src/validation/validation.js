export const itemDetailsValidation = {
  title: {
    required: "Item title is required",
    minLength: {
        value: 2,
        message: "Title should be at least 2 characters long",
    },
    maxLength: {
        value: 120,
        message: "Not more than 120 characters",
    },
  },
  link: {
    required: "Link is required",
    pattern: {
      value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
      message: "Enter a valid URL",
    },

    maxLength: {
        value: 500,
        message: "Not more than 1000 characters",
    },
  },
  icon_url: {
    required: "Icon URL is required",
    pattern: {
      value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
      message: "Enter a valid URL",
    },
    maxLength: {
        value: 1000,
        message: "Not more than 1000 characters",
    },
  },
  tag: {
    required: "Tag is required",
  },
  category: {
    required: "Category is required",
    minLength: {
        value: 2,
        message: "Category should be at least 2 characters long",
    },
    maxLength: {
        value: 50,
        message: "Not more than 50 characters",
    },
  },
  description: {
    required: "Description is required",
    minLength: {
      value: 5,
      message: "Description should be at least 5 characters long",
    },
    maxLength: {
        value: 1000,
        message: "Not more than 1000 characters",
    },
  },
};
