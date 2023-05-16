from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Añade los campos adicionales que quieras
    edad = models.IntegerField(null=True, blank=True)

# Create your models here.
