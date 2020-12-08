const mongoose = require("mongoose");
const slugify = require("slugify");

// use mongoose to create the schema
const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a title"],
            // use unique to build MongoDB unique indexes
            //its not used for validation
            unique: true,
            trim: true,
            maxlength: [50, "Book title can't be more than 50 characters"],
        },
        slug: String,
        author: {
            type: String,
            required: [true, "Please add an author"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// use the mongoose pre hook
// to create a function to slugify the title
BookSchema.pre("save", function (next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});


module.exports = mongoose.model("Book", BookSchema);
