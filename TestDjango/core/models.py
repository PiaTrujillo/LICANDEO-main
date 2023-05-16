from django.db import models

# Create your models here.

#Categoría del Producto
class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True, verbose_name='Id de categoria')
    nombreCategoria = models.CharField(max_length=50, verbose_name="Nombre de la categoria")

    def _str_(self):
        return self.nombreCategoria

#Producto
class Producto(models.Model):
    sku = models.CharField(max_length=6, primary_key=True, verbose_name='sku')
    nombre = models.CharField(max_length=20, verbose_name='nombre')
    precio = models.CharField(max_length=20, null=True,blank=True, verbose_name='precio')
    stock = models.CharField(max_length=20, null=True,blank=True, verbose_name='stock')
    descripcion = models.CharField(max_length=200, null=True, blank=True, verbose_name='descripcion')
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def _str_(self):
        return self.sku
