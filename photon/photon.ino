int pressureSensor = A2;
int pressureValue;

void setup() {
    pinMode(pressureSensor, INPUT);
    Particle.variable("pressure", &pressureValue, INT);
}

void loop() {
    pressureValue = analogRead(pressureSensor);
    delay(200);
}
