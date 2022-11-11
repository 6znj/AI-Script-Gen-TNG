import 'package:inject/inject.dart';
import 'package:tng_scriptgen_flutter_app/services/script_generator_api_client.dart';
import 'package:tng_scriptgen_flutter_app/services/script_repository.dart';

@provide
@singleton
class ScriptSyncService {

  final ScriptRepository _repository;
  final ScriptGeneratorApiClient _scriptGeneratorApiClient;

  ScriptSyncService(this._re