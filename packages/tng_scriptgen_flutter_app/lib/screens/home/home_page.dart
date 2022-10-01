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
        title: Text("Home Page"),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 2.0),
        child: GridView.count(
          crossAxisCount: 2,
          padding: EdgeInsets.all(3.0),
          children: <Widget>[
            makeDashboardItem("Script List", Icons.book, () {
              Navigator.of(context).pushNamed('/script-list');
            }),
            makeDashboardItem("Generate", Icons.book, () {
              Navigator.of(context).pushNamed('/generate');
            }),
          ],
        ),
      ),
    );
  }

  Card makeDashboardItem(String title, IconData icon, Function onTap) {
    retur