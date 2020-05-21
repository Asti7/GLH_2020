import 'package:flutter/material.dart';
import 'package:glh/components/card_component.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/situation_model1.dart';
import 'package:glh/screens/situation_model3.dart';
import 'package:glh/screens/welcom_message_screen.dart';

class SituationModel0 extends StatelessWidget {
  static const String id = 'situation_model0';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: color7,
      appBar: AppBar(backgroundColor: color8, title: Text('Situation Cards')),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: SingleChildScrollView(
            child: Column(
              // crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                CardComponent(
                  onPressed: null,
                  color: color7,
                  delayAmountTime: 2,
                  text:
                      'Have you been financially afftected by COVID-19 and are seeking advice on your rights and obligations as a reidential tenant.',
                ),
                SizedBox(height: 100),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    CardComponent(
                      color: color9,
                      onPressed: () {
                        Navigator.pushNamed(context, SituationModel3.id);
                      },
                      delayAmountTime: 3,
                      text: 'Know your rights.',
                    ),
                    SizedBox(height: 20),
                    CardComponent(
                      color: color9,
                      onPressed: () {
                        Navigator.pushNamed(context, SituationModel1.id);
                      },
                      delayAmountTime: 4,
                      text: 'Rent & Tenancy negotiations.',
                    )
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
