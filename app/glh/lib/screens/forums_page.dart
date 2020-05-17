import 'package:flutter/material.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';

class ForumsPage extends StatelessWidget {
  static const String id = 'forums_page';
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
              child: Icon(Icons.create),
            ),
          ),
        ),
      ),
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        decoration: BoxDecoration(
          color: color7,
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(
                'Forums',
                style: TextStyle(color: color8, fontSize: 30),
              ),
              SizedBox(
                height: 50,
              ),
              ShowUp(
                child: Text(
                  'Post a question on the forums...',
                  style: TextStyle(color: color8, fontSize: 21),
                ),
                delay: delayAmount * 2,
              ),
              SizedBox(
                height: 50,
              ),
              ShowUp(
                delay: delayAmount*3,
                              child: Column(
                  children: <Widget>[
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('Anmol Sarraf')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('Anmol Sarraf')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('Anmol Sarraf')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('Anmol Sarraf')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('Anmol Sarraf')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('Anmol Sarraf')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}


