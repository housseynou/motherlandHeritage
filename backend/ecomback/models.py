from django.db import models

class Ecomback(models.Model):

    class Type(models.TextChoices):
        VET ='VETEMENT'
        CHAUS = 'CHAUSSURE'

    name = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    type = models.CharField(choices=Type.choices, max_length=10)
    inStock = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.name}'
