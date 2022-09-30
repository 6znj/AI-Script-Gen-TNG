import 'package:flutter/material.dart';
import 'package:inject/inject.dart';
import 'package:tng_scriptgen_flutter_app/services/script_repository.dart';
import 'package:tng_scriptgen_flutter_app/services/script_sync_service.dart';

@provide
class HomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Home Pag