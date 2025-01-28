function authenticateUser(user, callback) {
    console.log('Authenticating user...');
    
    setTimeout(() => {
        if (user.isAuthenticated) {
            console.log('User authenticated successfully.');
            callback(null, user); 
        } else {
            callback('Authentication failed', null);  
        }
    }, 1000); 
}

function verifyPaymentMethod(paymentMethod, callback) {
    console.log('Verifying payment method...');
    
    setTimeout(() => {
        if (paymentMethod.isValid) {
            console.log('Payment method is valid.');
            callback(null, paymentMethod);  
        } else {
            callback('Invalid payment method', null); 
        }
    }, 1000); 
}

function processPayment(user, paymentMethod, amount, callback) {
    console.log('Processing payment...');

    setTimeout(() => {
        if (user.balance >= amount) {
            user.balance -= amount;
            console.log(`Payment of ${amount} processed successfully.`);
            callback(null, user);  
        } else {
            callback('Insufficient balance', null);  
        }
    }, 1000); 
}

function updateAccountBalance(user, callback) {
    console.log('Updating user account balance...');

    setTimeout(() => {
        console.log(`User's new balance: ${user.balance}`);
        callback(null, user);
    }, 1000);
}

function notifyUser(user, paymentStatus, callback) {
    console.log('Notifying user...');
        setTimeout(() => {
        if (paymentStatus === 'success') {
            console.log(`Email sent to ${user.email}: Your payment was successful!`);
        } else {
            console.log(`Email sent to ${user.email}: Payment failed.`);
        }
        callback(null, 'Notification sent');
    }, 1000); 
}

function processPaymentFlow(user, paymentMethod, amount) {
    authenticateUser(user, (authError, authenticatedUser) => {
        if (authError) {
            console.log(authError);
            return;
        }

        verifyPaymentMethod(paymentMethod, (verifyError, verifiedPaymentMethod) => {
            if (verifyError) {
                console.log(verifyError);
                return;
            }

            processPayment(authenticatedUser, verifiedPaymentMethod, amount, (paymentError, updatedUser) => {
                if (paymentError) {
                    console.log(paymentError);
                    return;
                }

                updateAccountBalance(updatedUser, (balanceError, finalUser) => {
                    if (balanceError) {
                        console.log(balanceError);
                        return;
                    }

                    notifyUser(finalUser, 'success', (notifyError, message) => {
                        if (notifyError) {
                            console.log(notifyError);
                        } else {
                            console.log(message);
                        }
                    });
                });
            });
        });
    });
}

const user = {
    isAuthenticated: true,
    email: 'user@example.com',
    balance: 1000
};

const paymentMethod = {
    isValid: true
};

const paymentAmount = 200;


processPaymentFlow(user, paymentMethod, paymentAmount);
