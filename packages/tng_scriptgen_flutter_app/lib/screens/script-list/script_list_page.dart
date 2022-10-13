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

  ScriptListPageState(this._scriptRepos