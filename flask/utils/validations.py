import re
import filetype

def validate_tipoproducto(tipoproducto):
    return tipoproducto is not None
#valida si al menos un producto fue seleccionado y como máximo se seleccionan 5 productos
def validate_productos(productos):
    return productos is not None and len(productos) <= 5
#descripcion no tiene validacion
#validador de fotos, se debe subir al menos una foto y como máximo 5 fotos
def validate_fotos(fotos):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif","jfif","avif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif", "image/jfif", "image/avif"}

    # check if a file was submitted
    if fotos is None:
        return False

    # check if the browser submitted an empty file
    if fotos.filename == "":
        return False
    
    # check file extension
    ftype_guess = filetype.guess(fotos)
    if ftype_guess.extension not in ALLOWED_EXTENSIONS:
        return False
    # check mimetype
    if ftype_guess.mime not in ALLOWED_MIMETYPES:
        return False
    return True
#valida que se haya seleccionado una región
def validate_region(region):
    return region is not None
#valida que se haya seleccionado una comuna
def validate_comuna(comuna):
    return comuna is not None
#valida que el nombre del productor no esté vacío y tenga entre 3 a 80 caracteres, además permite que no se ingresen solo espacios
def validate_nombre_productor(nombre_productor):
    return nombre_productor is not None and 80>= len(nombre_productor) and len(nombre_productor)>= 3 and nombre_productor.count(' ') <= 1
#valida que el email del productor sea un email válido
def validate_email(email):
    regex = r'^\S+@\S+\.\S+$'
    return re.match(regex, email) is not None
#valida que el celular del productor sea un número de 9 dígitos tipo regex
def validate_celular_productor(celular_productor):
    regex = r'^[0-9]{9}$'
    
    return re.match(regex, celular_productor) is not None or not celular_productor








# def validate_conf_img(conf_img):
#     ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
#     ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

#     # check if a file was submitted
#     if conf_img is None:
#         return False

#     # check if the browser submitted an empty file
#     if conf_img.filename == "":
#         return False
    
#     # check file extension
#     ftype_guess = filetype.guess(conf_img)
#     if ftype_guess.extension not in ALLOWED_EXTENSIONS:
#         return False
#     # check mimetype
#     if ftype_guess.mime not in ALLOWED_MIMETYPES:
#         return False
#     return True


# def validate_confession(conf_text, conf_img):
#     return validate_conf_text(conf_text) and validate_conf_img(conf_img)
