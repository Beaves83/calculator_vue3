import { expect, describe, it } from 'vitest';
import Screen from '@/components/Screen/Screen.vue';
import { mount } from "@vue/test-utils";


describe("Screen.vue", () => {

  let wrapper = mount(Screen, {
    props: {
      text: 'Message test',
      result: 'Result test',
      error: '' },
  });

  const screen_top = wrapper.find('.screen__top');
  const screen_content = wrapper.find('.screen__content');
  let screen_error = wrapper.find('.screen__error');

  it("renders properly", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(screen_top.exists()).toBeTruthy();
    expect(screen_content.exists()).toBeTruthy();
  });

  it("doesn't show a message error when there isn't an error", () => {
    expect(screen_error.exists()).toBeFalsy();
  });

  it("shows an message error when there is an error", () => {
    wrapper = mount(Screen, {
      props: {
        text: 'Message test',
        result: 'Result test',
        error: 'Error test' },
    });
    screen_error = wrapper.get('.screen__error');
    expect(screen_error.text()).toContain("Error test");
  });
});