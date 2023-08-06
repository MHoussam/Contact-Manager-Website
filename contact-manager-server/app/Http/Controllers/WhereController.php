<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use app\Models\User;
use App\Models\Contact;


// header("Content-type: application/json; charset=utf-8");
// header('Access-Control-Allow-Origin: http://127.0.0.1:3000');
// header('Access-Control-Allow-Methods: POST');
// header("Access-Control-Allow-Headers: Content-Type");

class WhereController extends Controller {
    public function write() {
        return 'hi';
    }

    public function displayContacts ($contact_id = null) {
        
        if (!is_null($contact_id)) {
            $contacts = Contact::where('id', $contact_id)->get();
        } 
        else {
            $contacts = Contact::all();
        }

        return response()->json([$contacts]);
    }

    public function addContact (Request $request) {
        
        $contacts = new Contact;
        $contacts->user_id = 3;
        $contacts->first_name = $request->first_name;
        $contacts->last_name = $request->last_name;
        $contacts->phone = $request->phone;
        $contacts->address_latitude = $request->address_latitude;
        $contacts->address_longitude = $request->address_longitude;
        $contacts->save();
        
        return response()->json([
            'status' => 'Success',
            'data' => $contacts
        ]);
    }
}
