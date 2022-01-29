from django.db import models

# Create your models here.

class Link(models.Model):
    customUrl = models.CharField(max_length=200)
    response = models.TextField()
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.customUrl
