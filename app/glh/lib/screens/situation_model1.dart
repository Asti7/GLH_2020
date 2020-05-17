import 'package:flutter/material.dart';
import 'package:glh/components/card_component.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/situation_model2.dart';

class SituationModel1 extends StatelessWidget {
  static const String id = 'situation_model1';

  @override
  Widget build(BuildContext context) {
    var delayAmount = 500;
    return Scaffold(
      backgroundColor: color7,
      appBar: AppBar(
        backgroundColor: color8,
        title: Text('Situation Cards')
        
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: SingleChildScrollView(
            child: Column(
              // crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                CardComponent(
                  onPressed: null,
                  delayAmountTime: 2,
                  text: 'Rent & Tenancy negotiations.',
                ),
                SizedBox(height: 40),
                ShowUp(
                  delay: delayAmount * 3 - 500,
                  child: Text(
                    '↓',
                    style: TextStyle(fontSize: 50),
                  ),
                ),
                SizedBox(height: 40),
                CardComponent(
                  onPressed: null,
                  delayAmountTime: 3,
                  text:
                      'Have you negotiated a rent reduction or a rent defferal with your landlord ?',
                ),
                SizedBox(height: 50),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    CardComponent(
                      onPressed: null,
                      delayAmountTime: 4,
                      text: 'Yes:  Are you satisfied with the agreement ?',
                    ),
                    SizedBox(height: 20),
                    CardComponent(
                      onPressed:(){
                        Navigator.pushNamed(context, SituationModel2.id);
                      },
                      delayAmountTime: 4,
                      text:
                          'No:  The first step would be to negotiate a rent reduction or a defferal in good faith. ',
                    ),
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
