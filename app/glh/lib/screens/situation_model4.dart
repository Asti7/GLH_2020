import 'package:flutter/material.dart';
import 'package:glh/components/card_component.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/situation_model2.dart';
import 'package:glh/screens/situation_model7.dart';

class SituationModel4 extends StatelessWidget {
  static const String id = 'situation_model4';

  @override
  Widget build(BuildContext context) {
    var delayAmount = 500;
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
                  delayAmountTime: 2,
                  text:
                      '1. The first thing that you should be aware of is that you cannot be evicted between 29 March and 26 September 2020 for arrears.',
                ),
                SizedBox(height: 40),
                ShowUp(
                  delay: delayAmount * 2,
                  child: Text(
                    '↓',
                    style: TextStyle(fontSize: 50),
                  ),
                ),
                CardComponent(
                  onPressed: (){
                    Navigator.pushNamed(context, SituationModel7.id);
                  },
                  delayAmountTime: 3,
                  text:'Your Landlord applied to VCAT for a Termination Order, which may be made issued if the Tribunal is satisfied.'
                      
                ),
                
              ],
            ),
          ),
        ),
      ),
    );
  }
}
