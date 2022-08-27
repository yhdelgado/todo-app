""" Todo models"""
from django.db import models


class Todo(models.Model):
    """Todo model"""
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
