<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use app\Models\User;
use App\Models\Contact;


class WhereController extends Controller {
    public function write() {
        return 'hi';
    }

    public function displayContacts (Request $request) {
        
        $user_id = $request->user_id;
        $contacts = Contact::where('user_id', $user_id)->get();

        return response()->json([
            'status' => 'Success',
            'data' => $contacts
        ]);
    }

    public function addContact (Request $request) {
        
        $contacts = new Contact;
        $contacts->user_id = $request->user_id;
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
