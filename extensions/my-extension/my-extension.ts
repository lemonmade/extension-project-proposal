import {extend, Button} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root, {configuration}) => {
  root.appendChild(
    root.createComponent(Button, {
      onPress() { console.log('Pressed!'); },
    }, configuration.current.buttonLabel),
  );
});
