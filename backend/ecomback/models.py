from django.db import models

class Ecomback(models.Model):

    class Type(models.TextChoices):
        VET ='VETEMENT'
        CHAUS = 'CHAUSSURE'

    name = models.fields.CharField(max_length=50)
    description = models.fields.CharField(max_length=1000)
    type = models.fields.CharField(choices=Type.choices, max_length=10)
    inStock = models.fields.BooleanField(default=True)

    def __str__(self):
        return f'{self.name}'
