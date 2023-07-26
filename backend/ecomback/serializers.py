from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ecomback
        fields = ('id', 'name', 'description', 'type', 'inStock')