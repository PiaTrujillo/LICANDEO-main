from django import forms
from django.forms import ModelForm 
from core.models import Producto

class ProductoForm(ModelForm):
    
    class Meta:
        model = Producto
        fields = ['sku', 'nombre', 'precio', 'stock', 'descripcion', 'categoria']