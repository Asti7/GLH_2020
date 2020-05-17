import 'package:flutter/material.dart';
import 'package:glh/components/category_section.dart';
import 'package:glh/components/category_section_situations.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/situation_model0.dart';

class ConsultancyPage extends StatelessWidget {
  static const String id = 'consultancy_page';

  @override
  Widget build(BuildContext context) {
    var delayAmount = 500;
    return Scaffold(
      floatingActionButton: ShowUp(
        delay: delayAmount * 4,
        child: Container(
          height: 40.0,
          width: 40.0,
          child: FittedBox(
            child: FloatingActionButton(
              backgroundColor: color8,
              onPressed: () {},
              child: Icon(Icons.search),
            ),
          ),
        ),
      ),
      body: Container(
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          color: color7,
        ),
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Text(
                  'Consultancy',
                  style: TextStyle(color: color8, fontSize: 30),
                ),
                SizedBox(
                  height: 50,
                ),
                ShowUp(
                  child: Text(
                    'Search Lawyers by their field of expertise...',
                    style: TextStyle(color: color8, fontSize: 21),
                  ),
                  delay: delayAmount * 2,
                ),
                SizedBox(
                  height: 50,
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: Column(
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              color: color7,
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Column(
                                  children: <Widget>[
                                    MaterialButton(
                                      onPressed: () {},
                                      child: CircleAvatar(
                                        backgroundColor: Colors.green,
                                      ),
                                    ),
                                    SizedBox(height: 10),
                                    Text('Harvey Specter'),
                                    SizedBox(height: 10),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

//
