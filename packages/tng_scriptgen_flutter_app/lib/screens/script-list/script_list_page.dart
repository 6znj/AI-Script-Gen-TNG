import 'package:flutter/material.dart';
import 'package:tng_scriptgen_flutter_app/services/script_repository.dart';
import 'package:tng_scriptgen_flutter_app/services/script_sync_service.dart';

class ScriptListPage extends StatefulWidget {
  ScriptRepository _scriptRepository;
  ScriptSyncService _scriptSyncService;

  ScriptListPage(this._scriptRepository,