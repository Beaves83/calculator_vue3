import { expect, describe, it } from "vitest";
import Description from "@/components/Description/Description.vue";
import { mount } from "@vue/test-utils";

describe("Description.vue", () => {
  const wrapper = mount(Description, {
    props: {
      msg: "Message test",
    },
  });

  const msg_showed = wrapper.find("h1");

  it("Renders properly", () => {
    expect(msg_showed.text()).toBe("Message test");
  });
});
