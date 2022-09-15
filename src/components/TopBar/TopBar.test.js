import { expect, describe, it } from "vitest";
import TopBar from "@/components/TopBar/TopBar.vue";
import { mount } from "@vue/test-utils";

describe("TopBar.vue", () => {
  let wrapper = mount(TopBar);

  const top_bar = wrapper.find(".top_bar");

  it("Renders properly", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(top_bar.exists()).toBeTruthy();
  });
});
