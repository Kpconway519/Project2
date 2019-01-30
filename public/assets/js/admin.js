
                          //        Barber Button          //
  
                          $("#barber-add-btn").on("click", function(event) {
                            event.preventDefault();
                          
                            var newBarber = {
                              firstName: $("#barber_first_name").val().trim(),
                              lastName: $("#barber_last_name").val().trim(),
                              location: $("#barber_location").val().trim(),
                            };
                          
                            $.post("/barber/new", newBarber)
                              .then(function(data) {
                                console.log(data);
                                alert("Adding new barber");
                              });
                          
                            // empty each input box by replacing the value with an empty string
                            $("#barber_first_name").val("");
                            $("#barber_last_name").val("");
                            $("#barber_location").val("");
                          
                          });
                        ////////////////////////////////////////////////////////////////////////////////
                        
                                                      //        Customer Button       //
                        
                          $("#customer-add-btn").on("click", function(event) {
                            event.preventDefault();
                          
                            var newCustomer = {
                              firstName: $("#customer_first_name").val().trim(),
                              lastName: $("#customer_last_name").val().trim(),
                              location: $("#customer_location").val().trim(),
                            };
                          
                            $.post("/customer/new", newCustomer)
                              .then(function(data) {
                                console.log(data);
                                alert("Adding new customer");
                              });
                          
                            // empty each input box by replacing the value with an empty string
                            $("#customer_first_name").val("");
                            $("#customer_last_name").val("");
                            $("#customer_location").val("");
                          
                          });
                        
                        
                        ////////////////////////////////////////////////////////////////////////////////
                        
                                                      //        Service Button        //
                        
                          $("#service-add-btn").on("click", function(event) {
                            event.preventDefault();
                          
                            var newService = {
                              name: $("#service_name").val().trim(),
                              description: $("#service_description").val().trim(),
                              price: $("#service_price").val().trim(),
                              duration: $("#service_duration").val().trim()
                            };
                          
                            $.post("/service/new", newService)
                              .then(function(data) {
                                console.log(data);
                                alert("Adding new service");
                              });
                          
                            // empty each input box by replacing the value with an empty string
                            $("#service_name").val("");
                            $("#service_description").val("");
                            $("#service_price").val("");
                            $("#service_duration").val("");
                          
                          });
                        
                        
                        ////////////////////////////////////////////////////////////////////////////////////
                        
                        
                        