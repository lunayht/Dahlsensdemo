import cv2
import argparse
import mysql.connector

######################################## CONSTANTS ########################################
HOST='localhost'
USER='lauretta'
PASSWORD='dahlsens'
DB='dahlsens'

######################################## FUNCTIONS ########################################
def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('VIDEO_PATH', type=str)
    parser.add_argument('id', type=str)
    return parser.parse_args()

def update_db(id, db, cursor):
    sql = "UPDATE cameras SET assign = '1' WHERE id = '" + id + "'"
    cursor.execute(sql)
    db.commit()

########################################### MAIN ##########################################
args = parse_args()
cap = cv2.VideoCapture(args.VIDEO_PATH)
mydb = mysql.connector.connect(
    host=HOST,
    user=USER,
    passwd=PASSWORD,
    database=DB
)
mycursor = mydb.cursor()

if cap.isOpened():
    update_db(args.id, mydb, mycursor)

while cap.isOpened():
    ret, img = cap.read()
    cv2.imshow('Webcam', img)

    if cv2.waitKey(1) == 27:
        break

print('END OF PROGRAM')
cap.release()
cv2.destroyAllWindows()
mydb.close()