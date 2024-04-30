from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

#layanan bookApp
def get_catalogue(book_id):
    response = requests.get(f"http://localhost:5001/catalogues/{book_id}")
    return response.json()

#layanan get borrowed quantity
def get_borrow_quantity(book_id):
    response = requests.get(f"http://localhost:5002/borrow/quantity/{book_id}")
    return response.json()['total_qty']

#layaanan get user borrowed book
def get_user_borrow(user_id):
    response = requests.get(f"http://localhost:5002/borrow/quantity/user/{user_id}")
    return response.json()


#layanan get review
def get_book_review(book_id):
    response = requests.get(f"http://localhost:5003/reviews/{book_id}")
    return response.json()[1]['reviews']

#layanan notif user
def get_notif_user(user_id):
    response = requests.get(f"http://localhost:5004/notifications/{user_id}")
    return response.json()

@app.route('/bookInformation/<int:book_id>', methods=['GET'])
def show_bookInfo(book_id):
    catalogue_info = get_catalogue(book_id)
    borrow_quantity = get_borrow_quantity(book_id)
    book_review = get_book_review(book_id)

    return render_template('bookInfo.html', catalogue_info=catalogue_info, borrow_quantity=borrow_quantity, book_review=book_review)

@app.route('/userInformation/<int:user_id>', methods=['GET'])
def show_userInfo(user_id):
    book_borrow = get_user_borrow(user_id)
    user_notif = get_notif_user(user_id)

    return render_template('userInfo.html', book_borrow=book_borrow, user_notif=user_notif)

if __name__ == '__main__':
    app.run(debug=True, port=5006)

