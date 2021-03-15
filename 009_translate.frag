#version 330
precision mediump float;
out vec4 FragColor;

uniform vec2 u_resolution;

float colorCircle(float radius, vec2 FragCoord) {
    return step(length(FragCoord - 0.5f), radius);
}

void main()
{   
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec2 trans = vec2(-0.4, 0.3) * 0.5;

    vec3 color = vec3(0.0f, colorCircle(0.2f, position - trans), 0.0f);
    FragColor = vec4(color, 1.0f);
}
