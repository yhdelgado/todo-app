from pyexpat import model
from django.contrib import admin
from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    """Todo Admin class"""
    list = ('title', 'description', 'completed')


admin.site.register(Todo, TodoAdmin)
