# Read Me

A simple django-rest-framework API with a simple React front-end, based on <https://www.youtube.com/playlist?list=PLOLrQ9Pn6caw0PjVwymNc64NkUNbZlhFw>.

This is a blog application.

## Notes

## Take Aways

### Templates

Template views can be used to reference a template in an external directory. You can add this to the `Templates` setting in the `settings.py` file; add:

```python
'DIRS' : [BASE_DIR / 'templates'],

```

This will make the external directory recognizable to the django server. The template paths will then extend from the `templates` directory.

### Foreign Key Protect Option

using the `on_delete=models.PROTECT` option ensures that, if an instance of the model in the foreign key is deleted, the related objects are not destroyed with it. For instance, this blog has a category and a post model; the post model has a foreign key to the category. If a category is deleted, we would not want it to delete all Posts associated with the category.

We do something different for the author foreign key. We use `models.CASCADE so that if an author is removed, all of that author's posts are deleted too.
