import { useClasser } from 'code-hike-classer-vue3';
import { defineComponent } from 'vue';
import { useErrorMessage } from '../hooks/useErrorMessage';

export const ErrorOverlay = defineComponent({
  name: 'ErrorOverlay',
  inheritAttrs: true,
  setup(_, { slots }) {
    const error = useErrorMessage();
    const c = useClasser('sp');

    return () => (
      <>
        {
          !error.value.message && !slots.default ? null : (
            <div class={c('overlay', 'error')} translate="no">
              <div class={c('error-message')}>{error.value.message || (slots.default ? slots.default() : null) }</div>
            </div>
          )
        }
      </>
    );
  },
});
