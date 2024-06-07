import pymysql
import json

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3307 #el 3306 no me dejó u.u
DB_CHARSET = "utf8"

with open('database/query.json', 'r') as querys:
	QUERY_DICT = json.load(querys)

# -- conn ---

def get_conn():
	conn = pymysql.connect(
		db=DB_NAME,
		user=DB_USERNAME,
		passwd=DB_PASSWORD,
		host=DB_HOST,
		port=DB_PORT,
		charset=DB_CHARSET
	)
	return conn

# -- querys --

def insert_producto(tipo, descripcion,comuna_id, nombre_productor,email_productor, celular_productor):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["insert_producto"], (tipo, descripcion,comuna_id, nombre_productor,email_productor, celular_productor))
    conn.commit()


def insert_producto_verdura(producto_id, tipo_verdura_fruta_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_producto_verdura"], (producto_id, tipo_verdura_fruta_id))
	conn.commit()

def insert_foto(ruta_archivo, nombre_archivo, producto_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_foto"], (ruta_archivo, nombre_archivo, producto_id))
	conn.commit()

def get_productos():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_productos"])
	user = cursor.fetchall()
	return user

def get_productos_limit():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_productos_limit"])
	user = cursor.fetchall()
	return user

def get_productos_next():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_productos_next"])
	user = cursor.fetchall()
	return user

def get_productos_comuna():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_productos_comuna"])
	user = cursor.fetchall()
	return user
	
def get_productos_tipo(producto):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_productos_tipo"],(producto,))
	user = cursor.fetchall()
	return user

def get_productos_foto(foto):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_productos_foto"],(foto,))
	user = cursor.fetchall()
	return user

def get_last_id():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_last_id"])
	user = cursor.fetchone()
	return user
def get_last_id_producto():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_last_id_producto"])
	user = cursor.fetchone()
	return user
def get_regiones():
    conn = get_conn()    
    sql = "SELECT id FROM region where nombre=%s"
    cursor = conn.cursor()
    cursor.execute(sql,(region,))
    conn.commit()
    region = cursor.fetchall()
    return region

def get_comunas(comuna):
		conn = get_conn()
		sql="SELECT id FROM comuna where nombre=%s"
		cursor= conn.cursor()
		cursor.execute(sql,(comuna))
		comunas = cursor.fetchall()
		return comunas
#permite enconrar el id de un tipo de producto segun el nombre
def get_tipo_producto(tipo_producto):
	conn = get_conn()
	sql="SELECT id FROM tipo_verdura_fruta where nombre=%s"
	cursor= conn.cursor()
	cursor.execute(sql,(tipo_producto))
	tipo_productos = cursor.fetchall()
	return tipo_productos
#obtengo la region segun el id de la comuna
def get_region(region):
	conn = get_conn()
	cursor= conn.cursor()
	cursor.execute(QUERY_DICT["get_region"],(region,))
	regiones = cursor.fetchall()
	return regiones
#obtengo la comuna segun el id entregado de aquella
def get_comuna(comuna):
	conn = get_conn()
	cursor= conn.cursor()
	cursor.execute(QUERY_DICT["get_comuna"],(comuna,))
	comunas = cursor.fetchall()
	return comunas
#obtengo toda la info del producto segun el id
def get_id_producto_info(id):
	conn = get_conn()
	cursor= conn.cursor()
	cursor.execute(QUERY_DICT["get_id_producto_info"],(id,))
	id_producto_info = cursor.fetchall()
	return id_producto_info

def insert_pedido(tipo, descripcion,comuna_id, nombre_comprador,email_comprador, celular_comprador):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["insert_pedido"], (tipo, descripcion,comuna_id, nombre_comprador,email_comprador, celular_comprador))
    conn.commit()

def insert_pedido_verdura(pedido_id, tipo_verdura_fruta_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_pedido_verdura"], (pedido_id, tipo_verdura_fruta_id))
	conn.commit()

def get_pedidos():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_pedidos"])
	user = cursor.fetchall()
	return user

def get_pedidos_limit():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_pedidos_limit"])
	user = cursor.fetchall()
	return user

def get_pedidos_next():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_pedidos_next"])
	user = cursor.fetchall()
	return user

def get_pedidos_comuna():

	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_pedidos_comuna"])
	user = cursor.fetchall()
	return user

def get_pedidos_tipo(producto):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_pedidos_tipo"],(producto,))
	user = cursor.fetchall()
	return user

def get_id_pedido_info(id):
	conn = get_conn()
	cursor= conn.cursor()
	cursor.execute(QUERY_DICT["get_id_pedido_info"],(id,))
	id_pedido_info = cursor.fetchall()
	return id_pedido_info

def get_last_id_pedido():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_last_id_pedido"])
	user = cursor.fetchone()
	return user

def stats_productos():
	conn = get_conn()
	sql="select TVF.nombre, count(*) from producto_verdura_fruta PVF, tipo_verdura_fruta TVF where PVF.tipo_verdura_fruta_id = TVF.id group by TVF.nombre"
	cursor = conn.cursor()
	cursor.execute(sql)
	user = cursor.fetchall()
	return user

def stats_pedido():
	conn = get_conn()
	sql="select CO.nombre, count(*) from pedido PE, comuna CO where PE.comuna_id=CO.id group by PE.comuna_id"
	cursor= conn.cursor()
	cursor.execute(sql)
	user = cursor.fetchall()
	return user