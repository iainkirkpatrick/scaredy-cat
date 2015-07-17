#scaredy-cat

a curious cat

built with RxJS for mouse event streaming, and React for DOM updating.

#TODO
- stalking behaviour (complex!)
  - a stream for the Cat position?
  - involves recognition of whether the mouse is moving towards or away from the cat.
  - if the mouse moves towards the cat and gets within 100px, cat jumps away
  - normally, cat moves slowly to 500px away.
  - if mouse has been still for 3 secs and cat is 500px away, start pounce sequence
  - pounce sequence is an easeIn-type animation: slow build then fast pounce
  - what to do when mouse is captured?
## gamify
- streaming score based on mouse-cat proximity
- cat leaps at mouse
