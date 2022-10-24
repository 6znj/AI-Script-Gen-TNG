import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:inject/inject.dart';

@provide
@singleton
class ScriptGeneratorApiClient {
  String _token = '';
  String _baseUrl = 'http://rgtest42-amazon.de';

  Future<Map> login(username, password) async {
    Map payload = {'username': username, 'password': password};
    final res = await http.post(this._baseUrl + '/auth/login',
        h