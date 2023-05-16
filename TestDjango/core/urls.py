from django.urls import path
from core.views import index, todos, yerba, mates, bombillas, accesorios, sale, registro, productos,form_producto, form_mod_producto, form_del_producto

urlpatterns = [
    path('', index, name="index"),
    path('todos.html', todos, name="todos"),
    path('yerba.html', yerba, name="yerba"),
    path('mates.html', mates, name="mates"),
    path('bombillas.html', bombillas, name="bombillas"),
    path('accesorios.html', accesorios, name="accesorios"),
    path('sale.html', sale, name="sale"),
    
    path('registro.html', registro, name="registro"),
    
    path('productos.html', productos, name="productos"),
    path('form_producto.html', form_producto, name="form_producto"),
    path('form_mod_producto.html/<id>', form_mod_producto, name="form_mod_producto"),
    path('form_del_producto.html/<id>', form_del_producto, name="form_del_producto"),
]