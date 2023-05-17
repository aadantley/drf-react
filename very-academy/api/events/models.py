from django.db import models


# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100)
    details = models.CharField(max_length=100)
