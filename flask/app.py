from flask import Flask, request, render_template, redirect, url_for, session
from utils.validations import *
from database import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import json

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)

# app.secret_key = "s3cr3t_k3y"

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000 # 16 MB

@app.errorhandler(413)
def request_entity_too_large(error):
    return 'File exceeds the maximum file size allowed', 413


#este index está listop
@app.route("/")
def index():
    return render_template("index.html")

#no es el objetivo de la tarea2
@app.route("/agregar-pedido", methods=["GET", "POST"])
def agregar_pedido():
    return render_template("agregar-pedido.html")
#atendido por flask
@app.route("/agregar-productos", methods=["GET", "POST"])
def agregar_productos():
    print('ESTOY EN LA FUNCION')
    if request.method == "POST":
        print('ESTOY EN POST')
        tipo = request.form.get("producto")
        productos= request.form.getlist("producto-especifico[]")
        descripcion = request.form.get("descripcion")
        fotos= request.files.getlist("filesupload")
        region= request.form.get("regiones")
        comuna_id = request.form.get("comuna")
        nombre_productor = request.form.get("nombre-productor")
        email_productor = request.form.get("email")
        celular_productor = request.form.get("numero-productor")
        print(request.form)
        print(tipo,productos,descripcion,fotos,region,comuna_id,nombre_productor,email_productor,celular_productor)
        #VALIDAMOS
        #errores que se van a mostrar
        messages = []
        errores = {
            "tipo_producto": 'Por favor, ingrese un nombre válido',
            "producto":'Porfavor, seleccione al menos un producto',
            "fotos": 'Por favor, ingrese un archivo válido válida',
            "region": 'Por favor, seleccione una región',
            "comuna": 'Por favor, seleccione una comuna',
            "nombre": 'Por favor, ingrese un nombre válido',
            "email":'Por favor, ingrese un correo electrónico válido',
            "celular": 'Por favor, ingrese un número de celular válido'
        }
        #validamos
        if not validate_tipoproducto(tipo):
            messages.append(errores["tipo_producto"])
        if not validate_productos(productos):
            messages.append(errores["producto"])
        for foto in fotos:
            if not validate_fotos(foto):
                messages.append(errores["fotos"])
        if not validate_region(region):
            messages.append(errores["region"])
        if not validate_comuna(comuna_id):
            messages.append(errores["comuna"])
        if not validate_nombre_productor(nombre_productor):
            messages.append(errores["nombre"])
        if not validate_email(email_productor):
            messages.append(errores["email"])
        if not validate_celular_productor(celular_productor):
            messages.append(errores["celular"])

        
        print(messages)
        if len(messages)==0:
            print('ESTOY EN largo cero')
            #si no hya errores se inserta a la base de datos
            #buscar el id de la comuna
            comuna=db.get_comunas(comuna_id)
            #insertar con la funcion insert_producto(tipo,descripcion,comuna,nombre_productor,email_productor,celular_productor)
            db.insert_producto(tipo,descripcion,comuna,nombre_productor,email_productor,celular_productor)
            #buscar el id de varios productos, teniendo en cuento lo de insert producto
            last_id = db.get_last_id_producto() 
            if last_id == None:
                last_id = 0
            id = last_id[0]
            for producto in productos:
                id_productos=db.get_tipo_producto(producto) 
                print(id,id_productos[0][0])
            #insertar con insert producto verdura(producto_id,tipo_verdura_fruta_id)
                db.insert_producto_verdura(id,id_productos[0][0])
            
            #insertar fotos
            for foto in fotos:
                _filename = hashlib.sha256(
                secure_filename(foto.filename) # nombre del archivo
                .encode("utf-8") # encodear a bytes
                ).hexdigest()
                _extension = filetype.guess(foto).extension
                img_filename = f"{_filename}.{_extension}"

                # 2. save img as a file
                foto.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))
                path=os.path.join(app.config["UPLOAD_FOLDER"], img_filename)
                db.insert_foto(path,_filename,id)

            print('ESTOY EN el redirect')
            return redirect("/")
            # return redirect(url_for('/'))
        else:
            print('ESTOY EN el form de nuevo')
            return render_template("agregar-producto.html", messages=messages)

    elif request.method == "GET":
        print('ESTOY EN GET')
        return render_template("agregar-producto.html")
#desde la base de datos
@app.route("/ver-productos")
def ver_productos():
    productos_vision=db.get_productos()
    
    dicc_p= {}
    
    for producto in productos_vision:
        print(producto)
        producto_id=producto[0]
        tipo=producto[1]
        descripcion=producto[2]
        comuna_id=producto[3]
        comuna=db.get_comuna(comuna_id)
        nombre_productor=producto[4]
        email_productor=producto[5]
        numero_productor=producto[6]
        fotos=db.get_productos_foto(producto_id)
        
        productos=db.get_productos_tipo(producto_id)
        print(productos)
        region=db.get_region(comuna_id)
        print(producto_id,tipo,descripcion,comuna_id,nombre_productor,email_productor,numero_productor,fotos,productos,region)
        dicc_p[producto_id] = {'tipo': tipo, 'productos': productos,'region':region,'comuna':comuna , 'fotos': fotos}

    return render_template("ver-productos.html",productos=dicc_p)

        
#no es el objetivo de la tarea2
@app.route("/ver-pedidos")
def ver_pedidos():
    return render_template("ver-pedidos.html")



if __name__ == "__main__":
    app.run(debug=True)