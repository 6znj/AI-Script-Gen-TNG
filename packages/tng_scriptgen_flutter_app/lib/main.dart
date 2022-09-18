
import 'package:flutter/material.dart';
import 'package:inject/inject.dart';
import 'package:tng_scriptgen_flutter_app/screens/generate/generate_page.dart';
import 'package:tng_scriptgen_flutter_app/screens/home/home_page.dart';
import 'package:tng_scriptgen_flutter_app/screens/login/login_page.dart';
import 'package:tng_scriptgen_flutter_app/screens/script-list/script_list_page.dart';
import 'package:tng_scriptgen_flutter_app/screens/show_script/show_script_page.dart';
import 'package:tng_scriptgen_flutter_app/services/script_generator_api_client.dart';
import 'package:tng_scriptgen_flutter_app/services/script_repository.dart';
import 'package:tng_scriptgen_flutter_app/services/script_sync_service.dart';
import 'main.inject.dart' as g;

@Injector()
abstract class Main {
  @provide
  MyApp get app;
  static Future<Main> create(
      ) async {
    return await g.Main$Injector.create();
  }
}

void main() async {
  var container = await Main.create();
  runApp(container.app);
}

@provide
class MyApp extends StatelessWidget {

  final ScriptGeneratorApiClient _scriptGeneratorApiClient;