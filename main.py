import cv2
import argparse
import mysql.connector

HOST='localhost'
USER='lauretta'
PASSWORD='dahlsens'
DB='dahlsens'

mydb = mysql.connector.connect(
    host=HOST,
    user=USER,
    passwd=PASSWORD,
    database=DB
)

parser = argparse.ArgumentParser()
parser.add_argument("VIDEO_PATH", type=str)
args = parser.parse_args()

mycursor = mydb.cursor()
sql = "SELECT * FROM cameras WHERE url = '" + args.VIDEO_PATH + "'"

mycursor.execute(sql)
myresult = mycursor.fetchone()
url = myresult[2]
cap = cv2.VideoCapture(url)
print(cap.isOpened())

mydb.close()
