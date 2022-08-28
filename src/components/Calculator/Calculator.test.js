import { expect, describe, it } from 'vitest';
import Calculator from '@/components/Calculator/Calculator.vue';
import { mount } from "@vue/test-utils";


describe("Calculator.vue", () => {

  let wrapper = mount(Calculator);

  const top_bar = wrapper.find('.calculator');

  it("Renders properly", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(top_bar.exists()).toBeTruthy();
  });

});