import 'package:flutter/material.dart';
import 'package:glh/components/card_component.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';

class SituationModel2 extends StatelessWidget {
  static const String id = 'situation_model2';

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
                  text: 'No:  The first step would be to negotiate a rent reduction or a defferal in good faith. ',
                ),
                SizedBox(height: 40),
                ShowUp(
                  delay: delayAmount * 2,
                  child: Text(
                    '↓',
                    style: TextStyle(fontSize: 50),
                  ),
                ),
                SizedBox(height: 40),
                CardComponent(
                  color: color9,
                  onPressed: null,
                  delayAmountTime: 3,
                  text:
                      'How to negotiate rent reduction.',
                ),
                SizedBox(height: 40),
                ShowUp(
                  delay: delayAmount * 4,
                  child: Text(
                    '↓',
                    style: TextStyle(fontSize: 50),
                  ),
                ),
                SizedBox(height: 40),

                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    CardComponent(
                      onPressed: null,
                      delayAmountTime: 5,
                      text: 'When agreement is reached, the details should be registered with Consumer Affairs Victoria so everyone is clear on what has been decided. ',
                    ),
                    SizedBox(height: 20),
                    
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
