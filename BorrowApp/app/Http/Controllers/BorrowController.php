<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class BorrowController extends Controller
{
    public $borrow_book = [
        ['user_id' => 1, 'book_id' => 2, 'judul' => 'It Starts With Us', 'quantity' => 2],
        ['user_id' => 1, 'book_id' => 4, 'judul' => 'Pride and Prejudice','quantity' => 1],
        ['user_id' => 3, 'book_id' => 1, 'judul' => 'The Psychology of Money: Timeless lessons on wealth, greed, and happiness','quantity' => 2],
        ['user_id' => 4, 'book_id' => 3, 'judul' => 'Icebreaker','quantity' => 3],
        ['user_id' => 5, 'book_id' => 5, 'judul' => 'Little Women','quantity' => 1],
        ['user_id' => 2, 'book_id' => 2, 'judul' => 'It Starts With Us','quantity' => 2],
        ['user_id' => 2, 'book_id' => 4, 'judul' => 'Pride and Prejudice','quantity' => 2],
     ];

    public function getBorrowBook(){

        return response()->json($this->borrow_book);

    }

    public function getTotalQuantity($book_id){

        $book_borrowed = array_reduce($this->borrow_book, function($borrow, $item) use ($book_id){
            if($book_id == $item['book_id']){

                $borrow += $item['quantity'];
            }
            return $borrow;
        }, 0);

        return response()->json(
            ['book_id' => $book_id, 
            'total_qty' => $book_borrowed]
        );
    }

    public function displayBorrowedBooks($user_id) {
        $result = [];
        foreach ($this->borrow_book as $borrow) {
            if ($borrow['user_id'] == $user_id) {
                $result[] = ['book_id' => $borrow['book_id'], 'judul' => $borrow['judul'], 'quantity' => $borrow['quantity']];
            }
        }
        return response()->json($result);
    }
}
