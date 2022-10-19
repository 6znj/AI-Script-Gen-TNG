import 'package:flutter/material.dart';
import 'package:tng_scriptgen_flutter_app/services/script_repository.dart';
import 'package:tng_scriptgen_flutter_app/services/script_sync_service.dart';

class ScriptListPage extends StatefulWidget {
  ScriptRepository _scriptRepository;
  ScriptSyncService _scriptSyncService;

  ScriptListPage(this._scriptRepository, this._scriptSyncService);

  @override
  ScriptListPageState createState() =>
      ScriptListPageState(_scriptRepository, _scriptSyncService);
}

class ScriptListPageState extends State<ScriptListPage> {
  ScriptRepository _scriptRepository;
  ScriptSyncService _scriptSyncService;

  ScriptListPageState(this._scriptRepository, this._scriptSyncService);

  List items = List();
  Map selectedItem;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text('Scripts'), actions: <Widget>[
          // action button
          Builder(builder: (BuildContext context) {
            return IconButton(
                icon: Icon(Icons.file_download),
                onPressed: () async {
                  final scaffold = Scaffold.of(context);
                  scaffold.showSnackBar(SnackBar(
                    content: const Text('Started sync......'),
                  ));
                  try {
                    await syncScripts();
                  } catch (err) {
                    scaffold.showSnackBar(SnackBar(
                      content: const Text('Sync failed!'),
                    ));
                    return;
                  }
     